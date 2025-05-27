export const metadata = {
  title: 'Heal Hearing',
  description: 'Professional hearing care services',
};

export default function Head() {
  return (
    <>
      <title>{metadata.title}</title>
      <meta name="description" content={metadata.description} />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
    </>
  );
}
