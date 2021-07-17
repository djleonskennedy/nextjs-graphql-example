import Head from 'next/head';
import Link from 'next/link';

export default function Home() {
  return (
    <div>
      <Head>
        <title>next.js graphql example</title>
        <meta
          name="description"
          content="Generated by create next app"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Link href="/posts-clientside">
          <a>Posts client side rendering</a>
        </Link>
        <br />
        <Link href="/posts-serverside">
          <a>Posts server side rendering</a>
        </Link>
      </main>
    </div>
  );
}
