# Neversitup Test [Tawatchai Insree]

## Project structure

```
📂neversitup-test-template
   ├── 🐳Dockerfile
   ├── 📂golang
   │   ├── manipulate.go
   │   ├── manupulate_test.go
   │   ├── odd_number.go
   │   ├── odd_number_test.go
   │   ├── smily.go
   │   └── smily_test.go
   ├── 📂javascript
   │   ├── manipulate.js
   │   ├── manipulate.spec.js
   │   ├── odd-number.js
   │   ├── odd-number.spec.js
   │   ├── package.json
   │   ├── package-lock.json
   │   ├── smily.js
   │   └── smily.spec.js
   ├── 📂nest-testing
   │   ├── nest-cli.json
   │   ├── package.json
   │   ├── package-lock.json
   │   ├── README.md
   │   ├── 📂src
   │   │   ├── app.controller.spec.ts
   │   │   ├── app.controller.ts
   │   │   ├── app.module.ts
   │   │   ├── app.service.ts
   │   │   ├── 📂count-smileys
   │   │   │   ├── count-smileys.controller.ts
   │   │   │   ├── count-smileys.interface.ts
   │   │   │   ├── count-smileys.service.spec.ts
   │   │   │   └── count-smileys.service.ts
   │   │   ├── 📂find-odd-int
   │   │   │   ├── find-odd-int.controller.ts
   │   │   │   ├── find-odd-int.interface.ts
   │   │   │   ├── find-odd-int.service.spec.ts
   │   │   │   └── find-odd-int.service.ts
   │   │   ├── main.ts
   │   │   └── 📂permutations
   │   │       ├── permutations.controller.ts
   │   │       ├── permutations.interface.ts
   │   │       ├── permutations.service.spec.ts
   │   │       └── permutations.service.ts
   │   ├── 📂test
   │   │   ├── app.e2e-spec.ts
   │   │   └── jest-e2e.json
   │   ├── tsconfig.build.json
   │   └── tsconfig.json
   ├── README.md
   ├── run.sh
   ├── tree
   └── 📂typescript
      ├── manipulate.spec.ts
      ├── manipulate.ts
      ├── odd-number.spec.ts
      ├── odd-number.ts
      ├── smily.spec.ts
      └── smily.ts

9 directories, 49 files
```

## Install package
1. open `neversitup-test-template` and go to dir. `nest-testing`

```
cd nest-testing
```

2. install package with npm
   
```
npm install
```

## Running Tests

To run tests, run the following command

```bash
   npm run test
```

## OR install package and run with docker

```
 sh run.sh
```