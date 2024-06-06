import http from 'k6/http';
import { sleep } from 'k6';
import { htmlReport } from "https://raw.githubusercontent.com/benc-uk/k6-reporter/main/dist/bundle.js";


let file = open('../../../backend/src/link-lists/mocked-file/file_model.csv', 'b');


export function handleSummary(data) {
  return {
    "report-upload-file-a.html": htmlReport(data),
  };
}


export let options = {
  duration: '5m',
  vus: 10,
};


export default function () {
  let params = {
    headers: {
      'Content-Type': 'text/csv',
    },
  };
  const res = http.post('http://localhost:3001/link-lists/upload', data);
  sleep(20);
}