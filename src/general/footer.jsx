import "../styles/footer.css"


function Footer() {
    return (
        <div className="footer">
            <div className="top-footer">
                <img src="https://tse2.mm.bing.net/th/id/OIP.dpJSh9trvQLh3KpNRjK0HQAAAA?r=0&rs=1&pid=ImgDetMain&o=7&rm=3" />
                <div className="footer-split">
                    <p>Products</p>
                    <i className="bi-plus"></i>
                </div>
                <div className="footer-split">
                    <p>Get to kmow us</p>
                    <i className="bi-plus"></i>
                </div>
                <div className="footer-split">
                    <p>On the Go</p>
                    <i className="bi-plus"></i>
                </div>
                <div className="footer-split">
                    <p>Legal</p>
                    <i className="bi-plus"></i>
                </div>
                <div className="footer-split">
                    <p>Support</p>
                    <i className="bi-plus"></i>
                </div>
                <div className="socials">
                    <i className=" bi bi-instagram"></i>
                    <i className="bi bi-twitter"></i>
                    <i className="bi-facebook"></i>
                    <i className="bi-linkedin"></i>
                    <i className="bi-youtube"></i>
                </div>
            </div>

            <div className="bottom-footer">
                <h1>Footnotes</h1>
                <p>Learn more about FDIC insurance coverage.</p>
                <p>Mastercard® is a registered trademark, and the circles design is a trademark of Mastercard International Incorporated. </p>
                <p>The EMVCo Contactless Symbol and Contactless Indicator mark, consisting of four graduating arcs, are trademarks owned by and used with permission of EMVCo, LLC.</p>
                <p>1
                    This product finder tool is informational and educational only and strictly meant to provide an overview of Capital One product offerings based on self-selected user goals. Its results do not constitute financial or investment advice.</p>
                <p>2
                    CreditWise availability will vary depending on ability to obtain your credit history from TransUnion®.</p>
            </div>

        </div>
    )
}

export default Footer;