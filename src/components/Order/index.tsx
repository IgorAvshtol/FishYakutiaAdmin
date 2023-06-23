import { Accordion, AccordionButton, AccordionItem, AccordionPanel } from '@chakra-ui/accordion';
import { OrderItems } from '@components/Order/OrderItems';
import { OrderPreview } from '@components/Order/OrderPreview';
import { OrderOtherInformation } from '@components/Order/OrderOtherInformation';
import { dateParser } from '@utils/dateParser';
import { Orders } from '@/interfaces';
import styles from '@styles/Orders.module.css';

interface OrderProps {
  orders: Orders[];
}

export const Order = ({ orders }: OrderProps) => {

  if (!orders.length) return <p>Loading...</p>;

  return (
      <div>
        {orders.map((group) => {
              return Object.keys(group).map((date) => {
                    const groupOrders = group[date];
                    return (
                        <div key={date}>
                          <p className={styles.orderDate}>{dateParser(date)}</p>
                          {groupOrders.map(order => (
                                  <Accordion allowMultiple key={order.id}>
                                    <AccordionItem className={styles.orderBlock}>
                                      <AccordionButton className={styles.orderPreview}>
                                        <OrderPreview
                                            id={order.id}
                                            userName={order.userName}
                                            userPhone={order.userPhone}
                                            totalAmount={order.totalAmount}
                                            createdAt={order.createdAt}
                                        />
                                      </AccordionButton>
                                      <AccordionPanel>
                                        <OrderItems items={order.foods}/>
                                        <OrderOtherInformation
                                            userAddress={order.userAddress}
                                            comment={order.comment}
                                            paymentMethod={order.paymentMethod}
                                        />
                                      </AccordionPanel>
                                    </AccordionItem>
                                  </Accordion>
                              )
                          )
                          }
                        </div>
                    );
                  }
              );
            }
        )
        }
      </div>
  );
};
