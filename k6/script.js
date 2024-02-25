import http from 'k6/http';
import { group, sleep } from 'k6';

export const options = {
  vus: 10,
  duration: '10s',
};

export default function () {

    group("IP API test", () => {
        http.get('https://httpbin.org/ip');
    });

    
    group("POST API Test", () => {
        const url = 'https://httpbin.org/post';
        const personData = {
            name: 'John Doe',
            age: 30,
            occupation: 'Software Engineer',
        };

        const headers = {
            'Content-Type': 'application/json',
        };

        const response = http.post(url, JSON.stringify(personData), { headers });
        //console.log('Response status code:', response.status);
        //console.log('Response body:', response.body);
    })
  
}
