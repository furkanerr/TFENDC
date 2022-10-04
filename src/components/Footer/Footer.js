import React from 'react'
import footerImg from '../../assets/img/footerImg.jpg'
import '../../styles/Components/Footer/footer.scss'
function Footer() {
  return (
    <section className='footer-container'>
    <img src={footerImg} alt="footer-img" />
    <div className="contact">
        <h3>İletişim</h3>
        <p>
            Adres: Çifte Havuzlar Mah. Eski Londra Asfaltı Cad. Kuluçka Merkezi D2 Blok No: 151/1F İç Kapı No: 2B03 Esenler/İstanbul
        </p>
        <h4> Email: <a href='mailto:bilgi@tesodev.com'>bilgi@tesodev.com</a></h4>
    </div>
    <iframe className='iframe' title='Location' src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d24023.516278071496!2d41.81574!3d41.179486!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4068763487bbfa37%3A0x865f644ee99290b7!2zQXJ0dmluIMOWxJ9yZXRtZW5ldmk!5e0!3m2!1str!2str!4v1664715751231!5m2!1str!2str" width="600" height="450" style={{border:0}} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
</section>
  )
}

export default Footer