# Page snapshot

```yaml
- navigation:
  - link "conduit":
    - /url: "#/"
  - list:
    - listitem:
      - link "Home":
        - /url: "#/"
    - listitem:
      - link "Sign in":
        - /url: "#login"
    - listitem:
      - link "Sign up":
        - /url: "#register"
- heading "Sign In" [level=1]
- paragraph:
  - link "Need an account?":
    - /url: "#register"
- group:
  - group:
    - textbox "Email": alanvoigt@yahoo.com.br
  - group:
    - textbox "Password": test123
  - button "Sign in" [disabled]
- link " Fork on GitHub":
  - /url: https://github.com/gothinkster/react-redux-realworld-example-app
```