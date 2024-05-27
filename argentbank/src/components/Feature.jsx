function Feature({ image, title, children }) {
    return (

        <div className="feature-item">
            <img src={image} alt="Chat Icon" className="feature-icon" />
            <h3 className="feature-item-title">{title}</h3>
            <p>
                {children}
            </p>
        </div>

    )
}

export default Feature