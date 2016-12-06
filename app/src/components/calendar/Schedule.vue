<style scoped>

.plan-list {
  border-top: none;
  background-image: none !important;
}

.plan {
  padding-top: 0;
  padding-bottom: 0;
}

.plan-left {
  text-align: right;
  padding: 10px 10px 10px 0;
}

.plan-center {
  background-color: #3399ff;
  opacity: 0.5;
}

.plan-right {
  padding: 8px 40px 8px 10px;
}

.plan-date {
  font-size: 14px;
  opacity: 0.8;
  margin-bottom: 4px;
  font-weight: 500;
}

.plan-duration {
  font-size: 11px;
  opacity: 0.4;
}

.plan-name {
  font-size: 17px;
  margin-bottom: 8px;
}

.plan-info {
  opacity: 0.4;
  font-size: 12px;
  line-height: 1.4;
}

.plan-icon {
  width: 12px;
  margin-right: 2px;
}

</style>
<template>
<ons-list class="plan-list">
  <ons-list-item modifier="chevron tappable" class="plan" ng-repeat="a in [1,2,3,4,5,6,7,8,9,10]">
    <ons-row>
      <ons-col width="80px" class="plan-left">
        <div class="plan-date">5:30 PM</div>
        <div class="plan-duration">1h</div>
      </ons-col>

      <ons-col width="6px" class="plan-center" ng-style="{backgroundColor:a % 3 == 1 ? '#3399ff' : '#ccc'}">
      </ons-col>

      <ons-col class="plan-right">
        <div class="plan-name">Onsen UI Meetup</div>

        <div class="plan-info">
          <div ng-hide="a % 4 == 0">
            <ons-icon class="plan-icon" icon="fa-phone"></ons-icon>123-456-789
          </div>

          <div ng-hide="a % 3 == 0">
            <ons-icon class="plan-icon" icon="fa-map-marker"></ons-icon>Moscone, San Francisco
          </div>
        </div>
      </ons-col>
    </ons-row>
  </ons-list-item>
</ons-list>
</template>