import './scroll.css';
// div text{
// animation: scrollText 5s infinite linear;
// }
// @keyframes scrollText {
//     from   { transform: translateX(200%); }
//     to { transform: translateX(-100%); }
//   }
function Scroll(){
return(
    <div className="text-scroll">
        <div className='scroll-text'>UDYAM </div>
        <div className='scroll-text'>UDGAM</div>
        <div className='scroll-text'>MASHAL</div>
        <div className='scroll-text'>UDYAM </div>
        <div className='scroll-text'>UDGAM</div>
        <div className='scroll-text'>MASHAL</div>
    </div>
)
}
export default Scroll;