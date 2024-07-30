import Link from 'next/link';

export default function Header() {
  return (
    <div style={{ display: 'flex', gap: '25px' }}>
      <Link href={'/hakkimda'}>Hakkımda</Link>
      <Link href={'/iletisim'}>İletişim</Link>
      <Link href={'/posts'}>Postlarım</Link>
    </div>
  );
}
