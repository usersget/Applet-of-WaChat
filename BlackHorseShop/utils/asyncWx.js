// Promise形式的getSetting
export const getSetting = () => {
    return new Promise((resolve, reject) => {
        wx.getSetting({
            success: (result) => {
                resolve(result);
            },
            fail: (err) => {
                reject(err);
            }
        });
    })
}

// Promise形式的getSetting
export const chooseAddress = () => {
    return new Promise((resolve, reject) => {
        wx.chooseAddress({
            success: (result) => {
                resolve(result);
            },
            fail: (err) => {
                reject(err);
            }
        });
    })
}

// Promise形式的openSetting
export const openSetting = () => {
    return new Promise((resolve, reject) => {
        wx.openSetting({
            success: (result) => {
                resolve(result);
            },
            fail: (err) => {
                reject(err);
            }
        });
    })
}



/**
 *  Promise形式的showModal
 * @param {object} content 
 */
export const showModal = ({ content }) => {
    return new Promise((resolve, reject) => {
        wx.showModal({
            title: '提示',
            content: content,
            showCancel: true,
            cancelText: '取消',
            cancelColor: '#000000',
            confirmText: '确定',
            confirmColor: '#3CC51F',
            success: (result) => {
                resolve(result);
            },
            fail: (err) => {
                reject(err);
            }
        });
    })
}



/**
 *  Promise形式的showToast
 * @param {object} title 
 */
export const showToast = (title) => {
    return new Promise((resolve, reject) => {
        wx.showToast({
            title: title,
            icon: 'none',
            success: (result) => {
                resolve(result);
            },
            fail: (err) => {
                reject(err);
            }
        });
    })
}


/**
 *  Promise形式的login
 */
export const login = () => {
    return new Promise((resolve, reject) => {
        wx.login({
            timeout: 10000,
            success: (result) => {
                resolve(result);
            },
            fail: (err) => {
                reject(err);
            }
        });
    })
}


/**
 *  Promise形式的requestPayment
 * @param {object} pay 支付所必要的参数
 */
export const requestPayment = (pay) => {
    return new Promise((resolve, reject) => {
        wx.requestPayment({
            ...pay,
            success: (result) => {
                resolve(result)
            },
            fail: (err) => {
                reject(err);
            }
        });
    })
}