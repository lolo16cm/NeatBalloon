import DirectoryItem from '../directory-item/directory-item.component';
import './directory.styles.scss';

const categories = [

  {
    id: 1,
    title: '5" Balloon',
    subtitle: '(1 box/100ct)',
    imageUrl: 'https://i.pinimg.com/564x/3e/04/f0/3e04f0f0db4ff11b1a4bfd5b770182f3.jpg',
    route: 'shop/05"',
  },

  {
    id: 2,
    title: '11" Balloon',
    subtitle: '(1 box/100ct)',
    imageUrl: 'http://melmarieblog.com/wp-content/uploads/2018/05/IMG-7479-768x576.jpg',
    route: 'shop/11"',
  },

  {
    id: 3,
    title: '16" Balloon',
    subtitle: '(1 box/50ct)',
    imageUrl: 'https://i.pinimg.com/564x/20/0d/23/200d23767ad5c4a4642109404c0e6961.jpg',
    route: 'shop/16"',
  },

  {
    id: 4,
    title: '17" Balloon',
    subtitle: '(1 box/50ct)',
    imageUrl: 'https://i.pinimg.com/564x/3e/bc/a8/3ebca843906cfb55f524537fa8bd49aa.jpg',
    route: 'shop/17"',
  },

  {
    id: 5,
    title: '24" Balloon',
    subtitle: '(1 order/1ct)',
    imageUrl: 'https://i.pinimg.com/736x/d9/0f/95/d90f958e10a093081d24d88f500245da.jpg',
    route: 'shop/24"',
  },

  {
    id: 6,
    title: '36" Balloon',
    subtitle: '(1 order/1ct)',
    imageUrl: 'https://ae01.alicdn.com/kf/HTB1g7wVB8mWBuNkSndVq6AsApXaW.jpg',
    route: 'shop/36"',
  },
];

const Directory = () => {
  return (
    <div className='directory-container'>
      {categories.map((category) => (
        <DirectoryItem key={category.id} category={category} />
      ))}
    </div>
  );
};

export default Directory;