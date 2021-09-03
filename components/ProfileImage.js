import Image from 'next/image'

const ProfileImage = () => (
  <Image
    src="/images/profile.jpg"
    height={144}
    width={144}
    alt="Your Name"
  />
)

export default ProfileImage
