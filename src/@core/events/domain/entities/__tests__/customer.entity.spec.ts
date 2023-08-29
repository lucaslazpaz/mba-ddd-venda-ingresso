import Cpf from '../../../../common/domain/value-objects/cpf.vo';
import { Customer, CustomerId } from '../customer.entity';

test('deve criar um cliente', () => {
  const customer = Customer.create({
    name: 'João',
    cpf: '91711531014',
  });
  console.log(customer);
  expect(customer).toBeInstanceOf(Customer);
  expect(customer.id).toBeDefined();
  expect(customer.id).toBeInstanceOf(CustomerId);
  expect(customer.name).toBe('João');
  expect(customer.cpf.value).toBe('91711531014');

  const customer2 = new Customer({
    id: new CustomerId(customer.id.value),
    name: 'João xpto',
    cpf: new Cpf('555.272.030-03'),
  });
  console.log(customer.equals(customer2));
});
