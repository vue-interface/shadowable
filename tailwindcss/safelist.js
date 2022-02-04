module.exports = sizes => {
    sizes = sizes || [
        'sm',
        'md',
        'lg',
        'xl',
        '2xl',
        'inner',
        'none'
    ];
    
    return sizes.reduce((carry, size) => {
        return carry.concat([
            `drop-shadow-${size}`,
            `shadow-${size}`,
        ]);
    }, []);
};