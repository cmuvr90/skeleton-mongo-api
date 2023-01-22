export default class ProductService {

  /**
   *
   * @param Product
   * @param LogService
   */
  constructor(Product, LogService) {
    this.product = Product;
    this.log = LogService.createLogger('product_service');
  }
}
