
function Foot() {
    const FooterYear=new Date().getFullYear()
  return (
    <footer className='footer p-10 bg-gray-700 text-primary-content footer-center'>
        <div>
        
        </div>
        <p>Copyright &copy; {FooterYear} All rights reserved</p>
    </footer>
  )
}

export default Foot
