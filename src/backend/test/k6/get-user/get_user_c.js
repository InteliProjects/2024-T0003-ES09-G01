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
      c: {
        executor: 'constant-vus',
        duration: '15m',
        vus: 1000,
      }
    },
  };
  

export default function () {
    const params = {
        headers: {
            'ngrok-skip-browser-warning': true,
        },
    };

    const res = http.get("http://localhost:3001/user/get-user?companyIdentifier=priscila.santos@sou.inteli.edu.br-Company1", params);
    sleep(10);
}