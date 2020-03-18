let user={
    "users":[{
        'email':'user1@gmail.com',
        'password':'User1@123',
    },{
        'email':'user2@gmail.com',
        'password':'User2@123',
    },{
        'email':'user3@gmail.com',
        'password':'User3@123',
    },{
        'email':'user4@gmail.com',
        'password':'User4@123',
    },{
        'email':'user5@gmail.com',
        'password':'User5@123',
    },{
        'email':'user6@gmail.com',
        'password':'User6@123',
    },{
        'email':'user7@gmail.com',
        'password':'User7@123',
    },{
        'email':'user8@gmail.com',
        'password':'User8@123',
    },{
        'email':'user9@gmail.com',
        'password':'User9@123',
    },{
        'email':'user10@gmail.com',
        'password':'User10@123',
    }]
};
let length=user.users.length;

function Validation(){
    let emailValue=document.getElementById('email').value;
    let passValue=document.getElementById('pass').value;

    for(let i=0;i<length;i++){
        if(emailValue === user.users[i].email  && passValue === user.users[i].password)
        {
            alert('succesfully login');
            break;
        }
        else{
             continue
        }
    }  
}
