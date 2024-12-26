```javascript
// pages/aboutSolution.js

export default function About() {
  const data = JSON.parse(window.localStorage.getItem('user') ?? 'null');
  // or
  const data = window.localStorage.getItem('user') ? JSON.parse(window.localStorage.getItem('user')) : null;
  console.log(data);
  return (
    <div>
      <h1>About Page</h1>
      <p>This is the about page</p>
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </div>
  );
}
```