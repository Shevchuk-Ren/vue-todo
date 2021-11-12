<template>
           <div class="about">

            <h2 class="visually-hidden">
              Заголовок, который скроем
            </h2>

<p class="about-company"><span class="about-name">Business Analytics</span> — a new, convenient tool for managing and forecasting your business performance, which will help analyze your own finances and cash flows, visualize your reporting, business processes, KPI's</p>
    <ul>

      <li class="about-item">
          <div class="features__thumb">
                      <svg class="features-icon" width="23" height="17" viewBox="0 0 23 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M19.9584 0L23 2.99416L8.77173 17L0 8.36558L3.04162 5.37142L8.77173 11.0118L19.9584 0Z" fill="#0076C0"/>
            </svg>
    </div>
      <div class="about-thumb">

          <h3 class="about-title">
    Interactive Reporting
        </h3> 
        <p class="about-description">
In just a few clicks, you can connect your data from 1C, CRM (Bitrix24, AmoCRM, ZohoCRM), E-commerce (PROM.UA, Rozetka, ebay), Logistic (Nova Poshta), Google Analytics and many more systems that reflect different aspects of business activities.
        </p>
      </div>
          
      </li >

          <li class="about-item">
                <div class="features__thumb">
                      <svg class="features-icon" width="23" height="17" viewBox="0 0 23 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M19.9584 0L23 2.99416L8.77173 17L0 8.36558L3.04162 5.37142L8.77173 11.0118L19.9584 0Z" fill="#0076C0"/>
            </svg>
    </div>
 <div class="about-thumb">
        <h3 class="about-title">
    Automated data updates
        </h3>
        <p class="about-description">
          The application automatically updates and structures the data in just 60 seconds, saving you time and money.
        </p>
 </div>
      </li>

          <li class="about-item">
                <div class="features__thumb">
                      <svg class="features-icon" width="23" height="17" viewBox="0 0 23 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M19.9584 0L23 2.99416L8.77173 17L0 8.36558L3.04162 5.37142L8.77173 11.0118L19.9584 0Z" fill="#0076C0"/>
            </svg>
    </div>
 <div class="about-thumb">
        <h3 class="about-title">
    Data Security
        </h3>
        <p class="about-description">
          The Bank guarantees the safety of your personal data, ensuring their integrity and confidentiality.
        </p>
 </div>
      </li>

    </ul>
    </div>

</template>
<script>


export default {
  name: 'Features',
  
}
</script>
<style scoped> 
.about {
  max-width: 664px;
  margin-right: 18px;
}
.about-item {
 display: flex;
}
.about-item:not(:last-child) {
  margin-bottom: 15px;


}
.about-title {

font-style: normal;
font-weight: 500;
font-size: 16px;
line-height: 156.69%;


display: inline-block;
margin-bottom: 10px;
color: #333333;
}
.about-description {
  font-style: normal;
font-weight: normal;
font-size: 14px;
line-height: 156.69%;




}
.about-company {
  font-style: normal;
font-weight: 400;
font-size: 16px;
line-height: 156.69%;
margin-bottom: 15px;
}
.about-name {
  font-style: normal;
font-weight: 500;
font-size: 16px;
line-height: 156.69%;

}
.visually-hidden {
  
  position: absolute; 
  width: 1px;
  height: 1px;
  margin: -1px;
  border: 0;
  padding: 0;
  font-size: xx-small;
  white-space: nowrap;
  clip-path: inset(100%);
  clip: rect(0 0 0 0);
  overflow: hidden;
} 
.features-icon {

}
.features-thumb {

}
.about-thumb {
  margin-left: 15px;
}
</style>