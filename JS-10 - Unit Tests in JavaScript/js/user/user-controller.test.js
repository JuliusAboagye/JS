const UserController = require("./user-controller");
const User = require("./user");

const userController = new UserController();

test('add user to userController', () => {    
    let user = new User(1234,"Santiago", "santiago@generation.org");
    userController.add(user);    
    expect(userController.getUsers()).toContain(user);
  });

test('remove user to userController', () => {    
    let user = new User(1234,"Santiago", "santiago@generation.org");
    userController.add(user);    
    userController.remove(user);
    expect(userController.users).not.toContain(user);
  });

  //ONE
  test('Verifies user before adding', () => {    
    let user = new User(7324,"Julius", "juliusaboagye45@gmail.com");
    expect(userController.getUsers()).not.toContain(user);
    userController.add(user);    
  });

//Two
  test('verify and remove', () => {    
    let user = new User(1234,"Charlie", "santiago@generation.org");
    expect(userController.users).not.toContain(user);
    userController.remove(user);
  });

  //THREE
  test('Find user by email', () => {    
    let user = new User(1234,"Santiago", "santiago@generation.org");
    let testEmail="santiago@generation.org";
    expect(userController.findByEmail(testEmail)).toEqual(user);
   
  });


  test('Find user by email', () => {    
    let user = new User(7324,"Julius", "juliusaboagye45@gmail.com");
    let testEmail="juliusaboagye45@gmail.com";
    expect(userController.findByEmail(testEmail)).toEqual(user);
   
  });

  //FOUR
  test('Find user by id', () => {    
    
    let user = new User(1234,"Santiago", "santiago@generation.org");
    let testId=1234;
    expect(userController.findById(testId)).toEqual(user);
  });

