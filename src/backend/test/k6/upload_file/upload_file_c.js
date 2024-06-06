import http from 'k6/http';
import { sleep } from 'k6';
import { htmlReport } from "https://raw.githubusercontent.com/benc-uk/k6-reporter/main/dist/bundle.js";

const fileData = open('../../../src/link-lists/mocked-file/file_model.csv', 'b');

export function handleSummary(data) {
  return {
    "report-upload-file-c.html": htmlReport(data),
  };
}
export let options = {
  duration: '15m',
  vus: 1000,
};


export default function () {
  const data = {
    field: 'this is a standard form field',
    file: http.file(fileData, 'file_model.csv'),
  };
  const res = http.post('http://localhost:3001/link-lists/upload', data);
  sleep(20);
}