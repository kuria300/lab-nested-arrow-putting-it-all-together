function createLoginTracker(userInfo){
  let attemptCount=0
  let maxAttempts=3

  const {password}= userInfo

    return(passwordAttempt)=>{

      //check first if its been locked
      if(attemptCount > maxAttempts){
         return 'Account locked due to too many failed login attempts'
      }

      attemptCount++
      if(passwordAttempt === password){
        attemptCount=0
        return 'Login successful'
      }else{
  
         if(attemptCount > maxAttempts){
           return 'Account locked due to too many failed login attempts'
         }else{
           return `Attempt ${attemptCount}: Login failed`;
         }
      }

    }

}
module.exports = {
  ...(typeof createLoginTracker !== 'undefined' && { createLoginTracker })
};