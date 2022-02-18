<template>
<v-container>
  <v-row>
    <v-col cols="12" md="5">
      <div>
            
              <v-card-title class="float-center">Наши Контакты</v-card-title>
              <v-card-text class="contact-content">
                ЗАО "Кыргызская Фондовая Биржа"
                <br>
                720010 Кыргызская Республика,<br>
                г. Бишкек, ул. Московская, 172, +996 312 31 14 84<br>
                Электронная почта: office@kse.kg
              </v-card-text>

               <v-card-text class="d-flex align-start pl-0 black--text pt-0">
                  <v-btn
              v-for="icon in icons"
              :key="icon"
              class="mx-4 black--text"
              icon
            >
              <v-icon size="24px">
                {{ icon }}
              </v-icon>
            </v-btn>
             </v-card-text>  
      </div>
    </v-col>
    <v-col cols="12" md="7">
    
        <iframe width="100%" height="450" frameborder="0" scrolling="no" marginheight="0" marginwidth="0" src="https://maps.google.com/maps?width=100%25&amp;height=300&amp;hl=en&amp;q=42.87019518584257,%2074.58516128220897+(%D0%9A%D1%8B%D1%80%D0%B3%D1%8B%D0%B7%D1%81%D0%BA%D0%B0%D1%8F%20%D0%A4%D0%BE%D0%BD%D0%B4%D0%BE%D0%B2%D0%B0%D1%8F%20%D0%91%D0%B8%D1%80%D0%B6%D0%B0)&amp;t=&amp;z=17&amp;ie=UTF8&amp;iwloc=B&amp;output=embed">
         <a href="https://www.gps.ie/truck-gps/">fleet tracking gps</a>
        </iframe>
  
    </v-col>
  </v-row>
</v-container>
</template>

<script>
export default {
data: () => ({
  icons: [
        'mdi-facebook',
        'mdi-twitter',
        'mdi-linkedin',
        'mdi-instagram',
      ],
})
}
</script>

<style>

</style>