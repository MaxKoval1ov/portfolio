import {useRouter} from 'next/router';
import {FC, memo} from 'react';

const Home: FC = memo(() => {
  const router = useRouter();

  // console.log(router.query);
  return <div>Hey here is my title {router.query.id}</div>;
});

export default Home;
