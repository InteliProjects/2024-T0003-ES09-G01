import http from 'k6/http';
import { sleep } from 'k6';
import { htmlReport } from "https://raw.githubusercontent.com/benc-uk/k6-reporter/main/dist/bundle.js";

const baseUrl = 'http://localhost:3001';

export function handleSummary(data) {
  return {
    "report-get-user.html": htmlReport(data),
  };
}

export let options = {
    scenarios: {
      a: {
        executor: 'constant-vus',
        duration: '5m',
        vus: 10,
      },
      b: {
        executor: 'constant-vus',
        duration: '5m',
        vus: 100, 
      },
      c: {
        executor: 'constant-vus',
        duration: '15m',
        vus: 1000,
      },
      d: {
        executor: 'constant-vus',
        duration: '15m',
        vus: 10000, 
      },
      e: {
        executor: 'constant-vus',
        duration: '30m',
        vus: 1000, 
      },
      f: {
        executor: 'constant-vus',
        duration: '30m',
        vus: 10000,
      },
    },
  };
  

export default function () {
    const res = http.get("http://localhost:3001/user/get-user?companyIdentifier=priscila.santos@sou.inteli.edu.br-Company1", params);
    sleep(10);
}