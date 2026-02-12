const VerticalSection = ({ children, className }) => {
    return (
        <section
            className={className}
            style={{
                width: '100%',
                position: 'relative',
                zIndex: 1
            }}
        >
            {children}
        </section>
    );
};

export default VerticalSection;
