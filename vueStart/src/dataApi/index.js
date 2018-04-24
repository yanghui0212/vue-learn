import axios from 'axios';

const baseUrl = 'http://qa.uexpress.tuochetong.com/ws-uexpress/u_express/';
const wayListUrl = 'delivered_way_foreign_courier';
const trackListUrl = 'list_tracking?orderNo=YHTYD8012256526YQ';

export const wayList = axios.get(baseUrl + wayListUrl).then(function (res) {
  return res;
});

export const trackList = axios.get(baseUrl + trackListUrl).then(function (res) {
  return res;
})
