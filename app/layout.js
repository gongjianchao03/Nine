import './globals.css';

export const metadata = {
  title: 'Nine',
  description: '一个简单的井字棋游戏',
};

export default function RootLayout({ children }) {
  return (
    <html lang="zh-CN">
      <body>{children}</body>
    </html>
  );
}

