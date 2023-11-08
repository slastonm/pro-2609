window.onload = function(){
    document.cookie = 'userName=Tom; SameSite=None';
    
    let userInfo = 'Tom Jonhson';
    let userKeyValue = 'Value  ! $ ^ ^ ) ( =- )';
    document.cookie = `${encodeURIComponent(userInfo)}=${encodeURIComponent(userKeyValue)}`;
    let date = new Date();
    console.log(date);
    // document.cookie = 'user=Den; path=course/; expires=Tue Nov 07 2023 20:55:15 GMT+0200';
        document.cookie = 'user=Den; path=course/; max-age=360';
    console.log(document.cookie);
}