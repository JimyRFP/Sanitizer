# Meta Sanitizer
## This lib contain useful functions to sanitize strings.

### Get Started

#### Instalation
```
npm install meta-sanitizer
```
#### Import
```
const meta_sanitizer=require('meta-sanitizer');
```
#### Email Sanitizer
This function remove special characteres, expect:
- At **@**
- Point **.**
- Underline **_**

Obs: Just remove special characteres, it does not check if the email is correct.
```
let sanitizedEmail=meta_sanitizer.email('emailwith%%%invalidcharacteres@email.com');
```

##### Arguments
- emailToSanitize (string) 



