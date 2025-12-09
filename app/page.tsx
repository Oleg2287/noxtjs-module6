import Image from 'next/image';

const Home = () => {
  return (
    <section>
      <h1>Welcome to Home</h1>
      <p>This is the home page.</p>
      <Image src="/test.png" alt="test" width={300} height={300} />
    </section>
  );
};

export default Home;
