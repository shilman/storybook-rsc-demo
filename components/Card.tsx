import { wrap } from 'module';
import styles from './card.module.css';
import type { Contact } from './types'

function Avatar({ img }: { img: string }) {
  return <img className={styles.circle} src={img} alt="avatar_img" />;
}

function Detail({ detailInfo }: { detailInfo: string }) {
  return <p className={styles.info}>{detailInfo}</p>;
}

type LoadingState = 'loading' | 'error';
type CardProps = { state: 'loaded', contact: Contact } | { state: LoadingState };
const unknownImg = 'https://icons.veryicon.com/png/o/internet--web/prejudice/user-128.png'

export function Card(props: CardProps) {
  let displayContact: Contact;
  let wrapperClass: string;
  if(props.state === 'loaded') {
    wrapperClass = '';
    displayContact = props.contact;
  } else if(props.state === 'loading') {
    wrapperClass = styles.loading;
    displayContact = { name: 'Loading...', img: unknownImg, tel: '', email: '' };
  } else {
    wrapperClass = styles.error;
    displayContact = { name: 'Error', img: unknownImg, tel: '', email: '' };
  }

  const { name, img, tel, email } = displayContact;
  return (
    <div className={wrapperClass}>
      <div className={styles.card}>
        <div className={styles.top}>
          <h2 className={styles.name}>{name}</h2>
          <Avatar img={img} />
        </div>
        <div className={styles.bottom}>
          <Detail detailInfo={tel} />
          <Detail detailInfo={email} />
        </div>
      </div>
    </div>
  );
}
