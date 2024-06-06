import http from 'k6/http';
import { sleep } from 'k6';
import { htmlReport } from "https://raw.githubusercontent.com/benc-uk/k6-reporter/main/dist/bundle.js";

export function handleSummary(data) {
  return {
    "report-get-user-a.html": htmlReport(data),
  };
}

export let options = {
  duration: '5m',
  vus: 10,
};

export default function () {
    const res = http.get("http://localhost:3001/user/get-user?companyIdentifier=priscila.santos@sou.inteli.edu.br-Company1");
    sleep(10);
}