```javascript
// pages/index.js
import Link from 'next/link';

export default function Home() {
  return (
    <div>
      <h1>Welcome to my Next.js app</h1>
      <Link href="/about">
        <a>Go to About</a>
      </Link>
    </div>
  );
}
```
```javascript
// pages/about.js

export default function About() {
  // This will cause a runtime error if the user navigates directly to /about
  // without going through the Home page first.
  const data = JSON.parse(window.localStorage.getItem('user'));
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