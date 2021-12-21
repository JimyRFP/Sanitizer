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

**Obs: This function just remove special characteres, it does not check if the email is correct.**

##### Arguments
- emailToSanitize (string) The unsafe email string that must be sanitized.

```
let emailToSanitize='emailwith%%%invalidcharacteres@email.com';
let sanitizedEmail=meta_sanitizer.email(emailToSanitize);
//output 'emailwithinvalidcharacteres@email.com'
```
#### SQL Query Protector
This function add \ charaterer before \ or ' characteres.
##### Arguments
- queryToProtect (string) The unsafe query that must be protected.

```
let queryToProtect="' or 1=1--";
let sanitizedEmail=meta_sanitizer.sqlQueryProtector(emailToSanitize);
//output "\\' or 1=1--"
```






