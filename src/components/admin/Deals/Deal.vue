<template>
  <v-card class="pa-3 mb-3">
    <div id="printDeal" style="">
      <h5>Зарегистрировано в ЗАО «Кыргызская Фондовая Биржа»</h5>
      <table class="tb tb1" border="1">
        <tbody>
          <tr>
            <td>Регистрационный номер №</td>
            <td>{{ deal.id }}</td>
          </tr>
          <tr>
            <td>Дата</td>
            <td>{{ deal.created_at }}</td>
          </tr>
          <tr>
            <td>Ф.И.О. уполномоченного лица</td>
            <td></td>
          </tr>
          <tr>
            <td>Должность</td>
            <td></td>
          </tr>
          <tr>
            <td>Подпись</td>
            <td></td>
          </tr>
        </tbody>
      </table>
      <span>м.п.</span>
      <div>
        <div style="text-align: center">
          <h5>БИРЖЕВОЙ ДОГОВОР №</h5>
        </div>
        <div style="display: flex; justify-content: space-between">
          <span>г. Бишкек</span>
          <span>«___»________,_____ г.</span>
        </div>
      </div>
      <div>
        <template>
          <table class="tb" border="1">
            <tbody>
              <tr>
                <td>
                  Наименование Посетителя торгов -
                  {{ sortType(deal.order_type_from) }}
                </td>
                <td>{{ deal.user_from_name }}</td>
              </tr>
              <tr>
                <td>
                  Регистрационный номер Посетителя торгов -
                  {{ sortType(deal.order_type_from) }}
                </td>
                <td>{{ deal.user_from }}</td>
              </tr>
            </tbody>
          </table>
          <p>
            именуемый в дальнейшем «Продавец», в лице Трейдера Посетителя торгов
            - <b></b>, действующего по доверенности (прилагается) ,с одной
            стороны, и
          </p>
        </template>
        <template>
          <table class="tb" border="1">
            <tbody>
              <tr>
                <td>
                  Наименование Посетителя торгов -
                  {{ sortType(deal.order_type_to) }}
                </td>
                <td>{{ deal.user_to_name }}</td>
              </tr>
              <tr>
                <td>
                  Регистрационный номер Посетителя торгов -
                  {{ sortType(deal.order_type_to) }}
                </td>
                <td>{{ deal.user_to }}</td>
              </tr>
            </tbody>
          </table>
          <p>
            ,именуемый в дальнейшем «Покупатель», в лице Трейдера Посетителя
            торгов - Покупателя <b></b>, действующего по доверенности
            (прилагается), с другой стороны, совместно именуемые в дальнейшем
            «Стороны», заключили настоящий договор о нижеследующем:
          </p>
        </template>
      </div>
      <div style="text-align: center">
        <h5>1.ПРЕДМЕТ ДОГОВОРА</h5>
      </div>

      <p>
        Настоящий Договор заключен на основании биржевой сделки, совершенной в
        ходе бессрочных биржевых торгов в ЗАО «Кыргызская Фондовая Биржа» «__»
        _____ , 2021 г. ( далее- Биржевая сделка) на следующих условиях:
      </p>
      <table class="tb" border="1">
        <tbody>
          <tr>
            <td>Регистрационный номер сделки</td>
            <td>{{ deal.id }}</td>
          </tr>
          <tr>
            <td>Наименование товара / Категория</td>
            <td>{{ deal.title }} / {{ deal.category }}</td>
          </tr>
          <tr>
            <td>Цена / Валюта</td>
            <td>{{ deal.price }} / {{ deal.currency_title }}</td>
          </tr>
          <tr>
            <td>Количество товара / Единица измерения</td>
            <td>{{ deal.amount }} / {{ deal.weight }}</td>
          </tr>
          <tr>
            <td>Сумма сделки / Валюта</td>
            <td>{{ deal.cost }} / {{ deal.currency_title }}</td>
          </tr>
          <tr>
            <td>Условия оплаты</td>
            <td>{{ deal.payment }}</td>
          </tr>
          <tr>
            <td>Условия поставки</td>
            <td>{{ deal.delivery }}</td>
          </tr>
          <tr>
            <td>Срок поставки</td>
            <td></td>
          </tr>
          <tr>
            <td>Дополнительные условия</td>
            <td>{{ deal.special_conditions }}</td>
          </tr>
        </tbody>
      </table>
      <p>
        1.2. Продавец в соответствии с условиями настоящего Договора обязуется
        поставить Покупателю, а Покупатель обязуется в установленные сроки
        принять и оплатить товар (далее- Товар), наименование, количество и
        качество которого предусматриваются условиями Биржевой сделки.<br />
        1.3. Товар должен отвечать общим критериям качества и безопасности,
        согласно действующим и применимым стандартам, а также техническим
        регламентам.<br />
        1.4. Поставка Товара с качественными показателями ниже указанных в
        настоящем Договоре не допускается. Товар с качественными показателями
        выше указанных показателей дополнительной оплате не подлежит и
        оплачивается по цене согласно условиям Биржевой сделки.<br />
        1.5. Продавец гарантирует, что Товар не находится под запретом
        отчуждения, арестом, не является предметом залога и другим средством
        обеспечения исполнения обязательств перед любыми физическими или
        юридическими лицами, государственными органами и государством, а также
        не является предметом любого другого отягощения или ограничения.<br />
      </p>
      <div style="text-align: center">
        <h5>2. ЦЕНА ТОВАРА И УСЛОВИЯ ОПЛАТЫ</h5>
      </div>
      <p>
        2.1. Цена Товара и валюта платежа устанавливаются согласно условиям
        Биржевой сделки. Цена Товара не может быть изменена Сторонами в течение
        всего срока действия настоящего Договора.<br />
        2.2. Оплата производится путем банковского перевода денежных средств на
        субсчёт Продавца открытый в расчетной организации ЗАО «Центральный
        депозитарий» в срок, установленный Биржевой сделкой.<br />
        2.3. Банковские расходы, связанные с переводом денежных средств на счет
        Продавца, оплачивает Покупатель.<br />
        2.4. Днем оплаты считается день перечисления соответствующих денежных
        средств на расчетный счет Продавца.<br />
      </p>
      <div style="text-align: center">
        <h5>3.ОБЯЗАННОСТИ СТОРОН</h5>
      </div>
      <p>
        3.1. <strong>Продавец обязуется: <br /> </strong> 3.1.1. Передать в
        собственность Покупателя Товар свободный от любых прав третьих лиц.<br />
        3.1.2. Нести все относящиеся к Товару расходы до момента его передачи
        Покупателю в соответствии с условиями поставки.<br />
        3.1.3. Поставить Товар соответствующего качества.<br />
        3.1.4. В случае несоответствия Товара по качеству условиям настоящего
        Договора произвести замену на Товар соответствующего качества. При этом,
        Покупатель не принимает Товар не соответствующего качества, а Продавец
        самостоятельно несет расходы, связанные с заменой такого Товара на Товар
        с качественным характеристиками согласно условиям настоящего
        Договора.<br />
        3.1.5. Обеспечить упаковку Товара за свой счет (за исключением случаев,
        когда данный вид Товара принято отгружать без упаковки).<br />
        3.1.6. Передать Покупателю в момент передачи Товара следующие
        документы:<br />
        - счёт-фактура установленной формы;<br />
        - товарная накладная;<br />
        - упаковочный лист (при необходимости);<br />
        - документ, подтверждающий страну происхождения Товара (при
        необходимости);<br />
        - сертификат/декларация соответствия;<br />
        - документ, подтверждающий качество Товара (при необходимости);<br />
        - и другие документы, согласно требованиям законодательства.<br />
        - 3.2. <strong>Покупатель обязуется:<br /></strong> 3.2.1. Произвести
        оплату по настоящему Договору в порядке и сроки, согласно условиям
        настоящего Договора.<br />
        3.2.2. Принять Товар согласно условиям настоящего Договора, осуществить
        проверку при приемке Товара по количеству и качеству согласно данным
        транспортных (отгрузочных) и сопроводительных документов на Товар.<br />
        3.2.3. Получить от Продавца вместе с Товаром документы, указанные в п.
        3.1.6. настоящего Договора.<br />
      </p>
      <div style="text-align: center">
        <h5>4.ПЕРЕХОД РИСКОВ И ПРАВА СОБСТВЕННОСТИ</h5>
      </div>
      <p>
        4.1. Продавец несет все риски случайной гибели, повреждения, порчи и
        хищения Товара до момента его передачи Покупателю согласно условиям
        поставки Товара. <br />
        4.2. Право собственности на Товар, а также все риски случайной гибели,
        повреждения, порчи и хищения Товара, переходят от Продавца к Покупателю
        с момента поставки Товара согласно условиям поставки. <br />
      </p>
      <div style="text-align: center">
        <h5>5.ОТВЕТСТВЕННОСТЬ СТОРОН</h5>
      </div>
      <p>
        5.1. Сроки и условия поставки Товара устанавливаются согласно условиям
        Биржевой сделки. <br />
        5.2. Товар по настоящему Договору поставляется (вид транспорта)
        транспортом, на условиях поставки, определенных Биржевой сделкой.<br />
        5.3. Товар по настоящему Договору считается поставленным Продавцом и
        принятым Покупателем (кроме случаев наличия у Покупателя претензий по
        количеству и качеству Товара):<br />
        - по количеству - в соответствии с количеством, указанным в транспортных
        (отгрузочных) документах;<br />
        - по качеству - в соответствии с данными документов, удостоверяющих
        безопасность и качество Товара.<br />
      </p>
      <div style="text-align: center">
        <h5>6.ПОРЯДОК ПОСТАВКИ И ПРИЕМКИ ТОВАРА</h5>
      </div>
      <p>
        6.1. В случае неисполнения и/или ненадлежащего исполнения Сторонами
        своих обязательств по настоящему Договору, Стороны несут ответственность
        определенную настоящим Договором и действующим законодательством
        Кыргызской Республики. <br />
        6.2. В случае если Продавец поставил Покупателю Товар, не
        соответствующий качественным показателям, установленным условиями
        Биржевой сделки, Продавец обязуется оплатить <br />
        6.1. Покупателю штраф в размере <br />
        % от стоимости не соответствующего Товара, а также <br />
        заменить на Товар надлежащего качества в обоснованной претензии
        Покупателя. <br />
        дневный срок с момента получения <br />
        6.3. При просрочке сроков оплаты Товара, установленных Биржевой сделкой,
        Покупатель обязуется оплатить Продавцу пеню в размере % от суммы,
        подлежащей оплате за каждый день просрочки. <br />
        6.4. Оплата неустоек, установленных п.п. 6.2. и 6.3. настоящего
        Договора, не освобождает Сторон от исполнения своих обязательств по
        настоящему Договору. <br />
      </p>
      <div style="text-align: center">
        <h5>7.ФОРС-МАЖОРНЫЕ ОБСТОЯТЕЛЬСТВА</h5>
      </div>
      <p>
        7.1. Стороны освобождаются от ответственности за частичное или полное
        неисполнение и/или ненадлежащее исполнение обязательств по настоящему
        Договору, если это неисполнение и/или ненадлежащее исполнение явилось
        следствием обстоятельств непреодолимой силы, возникших после заключения
        Договора в результате событий чрезвычайного характера (форс-мажор).
        <br />
        7.2. К таким событиям чрезвычайного характера относятся: наводнение,
        пожар, землетрясение,<br />
        7.1. взрыв, шторм, оседание почвы, эпидемия и иные явления природы, а
        также война или военные действия, забастовка в отрасли или регионе,
        принятие органом государственной власти или управления решения,
        повлекшего за собой невозможность исполнения настоящего Договора.<br />
        7.3. При наступлении и прекращении указанных в пунктах 7.1., 7.2.
        обстоятельств, Сторона, для которой создались форс- мажорные
        обстоятельства, должна немедленно известить об этом другую Сторону.<br />
        7.4. Надлежащим доказательством наличия указанных выше обстоятельств и
        их продолжительности должно служить письменное свидетельство
        Торгово-промышленной палаты страны Стороны, для которой возникли форс-
        мажорные обстоятельства.<br />
        7.5. При отсутствии своевременного извещения, предусмотренного в п.
        7.3., Сторона обязана возместить другой Стороне убытки, причиненные не
        извещением или несвоевременным извещением.<br />
        7.6. При наступлении форс-мажорных обстоятельств, сроки исполнения
        обязательств по настоящему Договору соразмерно увеличиваются на период
        действия таких форс-мажорных обстоятельств.<br />
      </p>
      <div style="text-align: center">
        <h5>8.РЕГИСТРАЦИЯ, ИЗМЕНЕНИЕ И РАСТОРЖЕНИЕ ДОГОВОРА</h5>
      </div>
      <p>
        8.1. Настоящий Договор подлежит обязательной регистрации в ЗАО
        «Кыргызская Фондовая Биржа» в сроки, установленные Правилами биржевой
        торговли и другими внутренними нормативными документами ЗАО «Кыргызская
        Фондовая Биржа». <br />
        8.2. Изменения и дополнения к настоящему Договору или его расторжение
        могут быть произведены в порядке и на условиях согласно настоящему
        Договору или применимому законодательству, а также по взаимному согласию
        Сторон или по решению суда. Соответствующее решение суда или,
        подписанные Сторонами изменения, дополнения, соглашение о расторжении
        настоящего Договора должны быть представлены Сторонами для регистрации в
        ЗАО «Кыргызская Фондовая Биржа». <br />
      </p>
      <div style="text-align: center">
        <h5>9.ДЕЙСТВИЕ ДОГОВОРА</h5>
      </div>
      <p>
        9.1. Настоящий Договор вступает в силу с момента его регистрации в ЗАО
        «Кыргызская Фондовая Биржа» и действует до полного исполнения Сторонами
        своих обязательств по настоящему Договору.
      </p>
      <div style="text-align: center">
        <h5>10. ЗАКЛЮЧИТЕЛЬНЫЕ ПОЛОЖЕНИЯ</h5>
      </div>
      <p>
        10.1. Споры и разногласия, которые могут возникнуть при исполнении
        настоящего Договора, решаются путем переговоров между Сторонами, а в
        случае невозможности их разрешения, споры решаются в Биржевой
        арбитражной комиссии ЗАО «Кыргызская Фондовая Биржа». <br />
        10.2. При несогласии Сторон с решением, принятым Биржевой арбитражной
        комиссией ЗАО «Кыргызская Фондовая Биржа», решение может быть обжаловано
        в суде в соответствии с действующим законодательством Кыргызской
        Республики.<br />
        10.3. Все отношения Сторон, связанные с исполнением обязательств по
        Договору, но не урегулированные его условиями, регламентируются
        действующим законодательством Кыргызской Республики.<br />
        10.4. Настоящий Договор содержит и выражает все договорные условия и
        понимание между участвующими здесь Сторонами в отношении всех упомянутых
        вопросов.<br />
        10.5. Ни одна из Сторон настоящего Договора не имеет права передавать
        свои права и обязательства по настоящему Договору третьим лица без
        письменного согласия другой Стороны.<br />
        10.6. Настоящий Договор составлен на русском языке, в трех идентичных
        экземплярах, которые имеют одинаковую юридическую силу.<br />
        10.1. 10.7. Стороны обязаны незамедлительно уведомлять друг друга об
        изменении своих почтовых адресов, банковских реквизитов, номеров
        телефонов, телефаксов.<br />
      </p>
      <div style="text-align: center">
        <h5>11. ЮРИДИЧЕСКИЕ АДРЕСА И БАНКОВСКИЕ РЕКВИЗИТЫ СТОРОН:</h5>
      </div>
      <table class="tb" border="1">
        <tbody>
          <tr>
            <th>ПРОДАВЕЦ:</th>
            <th>ПОКУПАТЕЛЬ:</th>
          </tr>
          <tr>
            <td>ОАО "Кыргызнефтегаз"</td>
            <td></td>
          </tr>
          <tr>
            <td>Юридический адрес:</td>
            <td></td>
          </tr>
          <tr class="bank">
            <!-- <td>
              <strong>Банковские реквизиты расчетной организации <br></strong> 
               <p>0000000000000000000000</p> 
               <p>Бишкекский филиал ЗАО "КИКБ" - "Манас"</p> 
               <p>128009</p> 
               <p>г.Бишкек, проспект Манаса 11/1 </p> 
               <p>Получатель: ЗАО «Центральный депозитарий»</p> 
              </td> -->
            <td>
              <strong>Банковские реквизиты расчетной организации <br /></strong>
              <div>0000000000000000000000</div>
              <div>Бишкекский филиал ЗАО "КИКБ" - "Манас"</div>
              <div>128009</div>
              <div>
                г.Бишкек, проспект Манаса 11/1 <br />
                Получатель: ЗАО «Центральный депозитарий»
              </div>
            </td>
            <td>
              <strong>Банковские реквизиты расчетной организации <br /></strong>
              <div>0000000000000000000000</div>
              <div>Бишкекский филиал ЗАО "КИКБ" - "Манас"</div>
              <div>128009</div>
              <div>
                г.Бишкек, проспект Манаса 11/1 <br />
                Получатель: ЗАО «Центральный депозитарий»
              </div>
            </td>
          </tr>
          <tr>
            <td><strong>Контакты:</strong></td>
            <td><strong>Контакты:</strong></td>
          </tr>
          <tr>
            <td>
              <strong>Трейдер:<br /></strong>
              ФИО
            </td>
            <td>
              <strong>Трейдер:<br /></strong>
              ФИО
            </td>
          </tr>
          <tr>
            <td><strong>Контакты трейдера:</strong></td>
            <td><strong>Контакты трейдера:</strong></td>
          </tr>
          <tr>
            <td><strong>Подпись:</strong></td>
            <td><strong>Подпись:</strong></td>
          </tr>
        </tbody>
      </table>
    </div>
  </v-card>
</template>

<script>
export default {
  props: ["deal"],
  methods: {
    sortType: (type) => (type == 1 ? "Продавца" : "Покупателя"),
  },
};
</script>

<style lang="scss" scoped>
.tb {
  width: 100%;
  border-collapse: collapse;
  border-spacing: 0;
}
.tb td {
  border: solid 1px black;
  font-family: Arial, sans-serif;
  font-size: 14px;
  padding: 5px;
}
.tb td:first-child {
  width: 50%;
}
.tb1 td:first-child {
  width: 40%;
}
p {
  font-size: 14px;
}
.bank > td > div {
  border-top: 0.5px solid grey;
}
</style>