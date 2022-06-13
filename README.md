## Api Getaway
Bir microservise bağlantı kurulması için. Microservisin portu belirtilerek import edilmesigerekir. Burada belirtilen port ile Microservisin localde kullandığı portun aynı olması gerekir.
### getaway sistemi içinde tanımlama
```
@Module({
  imports: [
    ClientsModule.register([
      { name: 'TRENDYOL', transport: Transport.TCP, options: { port: 3101 } },
    ]),
  ],
  controllers: [TrendyolController],
  providers: [TrendyolService],
})
```
### microservis main.ts içindeki tanımlama
```
async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.connectMicroservice({
    transport: Transport.TCP,
    options: { port: 3101 },
  });
  await app.startAllMicroservices();
  await app.listen(3101);
  console.log(`Trendyol Service is running on: ${await app.getUrl()}`);
}
```
### Haberleşme
öncelikle microservisin çağrılacağı service ve controller içinde bir Incjet oluşturulur.
```
  constructor(
      @Inject('TRENDYOL') private readonly trendyolClient: ClientProxy,
  ) {}

```
Getaway'da Metod içinde oluşturulan inkjet kullanılarak çağrı yapılır. Çağrı yapılırken microserviste eşleştirilecek bir pattern ve gönderilecek datalar belirlenir
```
  testAccount() {
    return this.trendyolClient.send('testAccount', {});
  }
```
Microservis'te gelen isteğin karşılanması
```
  @MessagePattern('testAccount')
  testAccount(body) {
    return this.appService.testAccount(body);
  }
```
