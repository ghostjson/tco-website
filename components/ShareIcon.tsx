const ShareIcon = () => {
  function handleShare() {
    if (navigator.share) {
      navigator.share({
        title: 'The Creative Oracle',
        url: 'https://the-creative-oracle.netlify.app/',
      });
    } else {
      console.log('no share Method');
    }
  }
  return (
    <span onClick={handleShare}>
      <img src='/icons/share.svg' alt='share icon' className='h-12 w-12' />
    </span>
  );
};

export default ShareIcon;
