export const dateConversionOnEntryPage = (date) => {
    var today = new Date(date);
    var dd = String(today.getDate()).padStart(2, "0");
    var mm = String(today.getMonth() + 1).padStart(2, "0");
    var yyyy = today.getFullYear();
    const convDate = yyyy + "-" + mm + "-" + dd;
    return convDate;
};

export const dateConversionOnEntryPageWithTime = (date) => {
    var today = new Date(date);
    var dd = String(today.getDate()).padStart(2, "0");
    var mm = String(today.getMonth() + 1).padStart(2, "0");
    var yyyy = today.getFullYear();
    var hh = String(today.getHours()).padStart(2, "0");
    var min = String(today.getMinutes()).padStart(2, "0");
    var ss = String(today.getSeconds()).padStart(2, "0");
    const convDate = `${yyyy}-${mm}-${dd} ${hh}:${min}:${ss}`;
    return convDate;
};


export const dateConversion = (date) => {
    var today = new Date(date);
    var dd = String(today.getDate()).padStart(2, "0");
    var mm = String(today.getMonth() + 1).padStart(2, "0");
    var yyyy = today.getFullYear();
    const convDate = dd + "/" + mm + "/" + yyyy;
    return convDate;
};