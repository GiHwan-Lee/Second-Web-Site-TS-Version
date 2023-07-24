# 프로젝트 이름

Todo-list Web application

# 프로젝트 소개

본 프로젝트는 JavaScript로 구현되었던 Todo-list 웹 애플리케이션을 TypeScript(TS)로 변환하는 과정을 통해 제작되었습니다.

웹 애플리케이션은 사용자의 일상을 편리하게 돕는 다양한 기능을 제공합니다. 실시간 시계, 개인화된 환영 메시지, 무작위로 제공되는 명언, 사용자 지정 할 일 목록 등의 기능을 통해 사용자는 일상 속에서 필요한 정보와 관리 도구를 한 번에 이 웹 애플리케이션에서 얻을 수 있습니다. 또한, 위치 기반 실시간 날씨 정보 제공을 통해 사용자에게 실시간으로 가장 가까운 위치의 날씨 정보를 제공합니다.

이 외에도 사용자 경험을 증진시키기 위한 요소들이 적용되었습니다. 웹 페이지의 배경 이미지는 무작위로 바뀌어 사용자에게 신선한 경험을 제공합니다. 이러한 기능들을 모두 TypeScript를 활용하여 구현하였습니다.

# 프로젝트 실행 방법

프로젝트는 Netlify를 이용하여 배포되었습니다. 웹 브라우저를 열고, 프로젝트가 배포된 Netlify의 URL에 접속하여 프로젝트를 실행시킬 수 있습니다.

URL: [Your Netlify URL]

# 프로젝트 구조 및 파일 설명

- `/css`
  - `style.css`: 프로젝트에 사용되는 모든 스타일을 정의하는 CSS 파일입니다.
- `/dist`
  - `*.js`: TypeScript를 컴파일하여 생성된 JavaScript 파일들입니다. 프로덕션 환경에서는 이 파일들이 실행됩니다.
- `/img`
  - 이미지 파일들: 프로젝트에서 사용되는 모든 이미지 리소스들이 저장되어 있습니다.
- `/src`
  - `background.ts`: 웹 페이지의 배경 관련 코드가 있는 TypeScript 파일입니다.
  - `clock.ts`: 시간과 관련된 기능을 구현한 TypeScript 파일입니다.
  - `greeting.ts`: 인사말과 관련된 기능을 구현한 TypeScript 파일입니다.
  - `quotes.ts`: 인용구와 관련된 기능을 구현한 TypeScript 파일입니다.
  - `todo.ts`: 할 일 목록 기능을 구현한 TypeScript 파일입니다.
  - `weather.ts`: 날씨와 관련된 기능을 구현한 TypeScript 파일입니다.
- `index.html`: 웹 페이지의 메인 HTML 파일입니다. 모든 JavaScript 파일이 이 파일에 연결되어 웹 페이지에 로드됩니다.
- `tsconfig.json`: TypeScript 컴파일러의 설정을 담은 파일입니다. 이 파일에 따라 TypeScript 코드는 JavaScript 코드로 컴파일됩니다.

# 기술 스택

- **HTML**: 웹 페이지의 구조를 정의하는 데 사용되었습니다.
- **CSS**: 웹 페이지의 디자인과 레이아웃을 구성하는 데 사용되었습니다.
- **TypeScript**: 정적 타입 체크와 최신 JavaScript 기능을 활용하였습니다. TypeScript 코드는 빌드 과정에서 JavaScript로 컴파일되었습니다.

# 기능들 설명

- `background`: 웹 페이지의 배경 이미지를 무작위로 가져와서 사용자에게 다양한 배경화면을 보여주도록 합니다.

- `clock`: 실시간으로 현재 시간을 화면에 표시함으로써 사용자에게 현재 시간에 대한 정보를 제공합니다.

- `greeting`: 사용자의 이름을 입력받아, 화면 상에 개인화된 환영 메시지를 표시하는 기능을 구현했습니다.

- `quotes`: 10가지의 명언을 무작위로 선택하여 화면에 표시함으로써 사용자에게 보여지도록 구현하였습니다.

- `todo`: 사용자는 할 일 목록을 생성, 관리할 수 있습니다. 새로운 항목을 추가하고, 완료된 항목을 삭제하는 기능을 제공합니다.

- `weather`: 사용자의 위치 정보를 기반으로 현재 날씨를 표시하는 기능을 제공합니다. 이 기능은 사용자에게 가장 가까운 위치의 실시간 날씨 정보를 제공합니다.

# 오류 발생 및 문제 해결 과정

-프로젝트를 진행하면서 HTML 요소에 접근하는 문제에 직면했습니다. HTML 요소를 TypeScript에서 사용하려 했으나, 초기에는 이를 제대로 인식하지 못하는 문제가 발생했습니다.

이를 해결하기 위해 여러 자료를 참조하며 원인을 파악했고, TypeScript에서 DOM 요소에 접근하기 위해서는 'dom' 라이브러리를 프로젝트 설정에 추가해야 한다는 것을 알게 되었습니다.

따라서 TypeScript 설정 파일(tsconfig.json)에서 lib에 "dom"을 추가하여, TypeScript가 DOM 타입들을 인식하도록 했습니다. 이렇게 함으로써 HTML 요소에 접근하는데 필요한 타입 정의를 TypeScript가 제대로 인식하게 되었고, HTML 요소를 손쉽게 제어할 수 있게 되었습니다.

그리고 그 이후에 특정 HTML 태그에 접근한 뒤 document를 통해 태그를 가져오거나 태그를 생성한 뒤 해당 값을 변수에 지정했을 때 일정한 타입을 지정해야 하는 것처럼 전체적으로 HTML과 연결된 JS 코드에 대해서 타입을 지정하는데 있어서 많은 오류를 경험했지만, 이 또한 TS에서 제공하는 내장 오류 메세지와 구글링을 통해 해결하였습니다.

-HTML 태그의 클래스를 classList를 이용하여 할당하는 코드를 작성하였는데, 기존에 JavaScript에서는 별도의 문제가 발생하지 않았으나, TypeScript에서는 이 부분에서 오류가 발생하였습니다.

TypeScript에서는 classList가 readonly 프로퍼티로 정의되어 있어서 직접 수정하는 것이 허용되지 않습니다. 이를 알게 된 후, classList에 직접 접근하여 클래스를 추가하는 대신 add 메소드를 사용하여 문제를 해결하였습니다. 이 경험을 통해 TypeScript의 타입 체크와 문법을 더 깊이 이해하는 기회가 되었습니다.

-todo를 작성하는 input box에 설정해놓은 placeholder 값이 잘리는 문제를 해결하기 위해 setAttribute를 사용했었는데, TS로 변환한 뒤 이 부분에서 오류가 발생했었습니다. TS에서 제공해주는 오류 메세지를 확인해보니 setAttribute의 2번째 인자 값에는 string이 들어와야 하는데, length로 인해 number type으로 들어와져 있기 때문에 생긴 오류였습니다. 그래서 두번째 인자 값을 toString을 통해 string으로 변환하여 해결했습니다.

# 프로젝트를 진행하면서 느낀 점 및 후기

-이번에 TypeScript(TS)를 활용하여 처음 프로젝트를 진행하면서 많은 것을 배웠습니다. JavaScript(JS)만으로 프로젝트를 수행했을 때와는 크게 다른 점이 있었는데, 그 중 가장 눈에 띄는 차이는 컴파일 단계에서 바로 오류를 발견할 수 있다는 것이었습니다. 이를 통해 TypeScript의 장점을 크게 느낄 수 있었고, 이는 개발 프로세스에 큰 도움이 되었습니다.

-또한, TypeScript로 작성한 후에 컴파일하여 JavaScript 코드를 지속적으로 확인하면서 프로젝트를 진행하였습니다. 이 과정에서 TypeScript에서 정의한 인터페이스가 JavaScript 코드에는 나타나지 않는다는 사실을 알게 되었는데, 이는 제 기대와는 달랐습니다. 예상했던 것은 TypeScript에서 해당 인터페이스에 주석을 달았을 때 이 주석이 JavaScript 코드에 남아있지 않을까 하는 생각이었습니다. 그러나 실제로는 주석조차도 JavaScript 코드에서 나타나지 않았습니다. 이러한 점은 매우 흥미로웠고, TypeScript의 작동 방식에 대한 이해를 더 깊게 하는 계기가 되었습니다.

-Todo-list 항목마다 고유한 식별자가 필요했습니다. 이를 위해 JavaScript의 Date.now() 함수를 사용하여 각 항목이 고유한 시간 기반 id를 가질 수 있도록 구현했습니다. 이 id는 중복 없이 각 항목을 식별하는데 사용되며, 이를 로컬 스토리지에 저장할 때는 문자열로 변환됩니다.

일반적으로 JavaScript에서 로컬 스토리지를 사용할 때는 문자열로만 데이터를 저장할 수 있으므로, 나중에 이 id 값을 사용하려면 다시 숫자로 변환해야 합니다. 이런 변환 과정은 매번 parseInt 함수를 사용하는 것과 같이 추가적인 작업을 필요로 합니다.

그러나 이번 프로젝트에서는 TypeScript를 통해 타입을 직접 string으로 지정할 수 있어서 추가적인 변환 작업이 필요 없었고 이로 인해 코드가 더욱 간결해질 수 있었고 이를 통해 TS의 장점을 직접적으로 경험할 수 있었습니다.

# 리팩토링 해야 할 점들

-타입은 직접 명시하기 보다는 추론하는게 좋다. 그 이유를 작성해주고, 앞으로 이를 리팩토링 할 예정

-TS에 대해서 지금 보다 더 깊게 공부하면서 다른 프로젝트도 만들어 볼건데, 그 때 새롭게 알게 된 내용이 있다면 이를 리팩토링.

-타입 추론에 대한 고려: TypeScript에서는 타입을 직접 명시하는 것보다는 가능한 한 타입 추론을 사용하는 것이 바람직합니다. 이는 코드의 가독성과 유지 관리성을 높이는 데 도움이 됩니다. 직접 타입을 명시하는 경우, 코드의 복잡성이 증가하고 불필요한 반복을 초래할 수 있습니다. 반면, 타입 추론을 활용하면 TypeScript 컴파일러가 변수의 타입을 자동으로 판단하므로 코드가 더욱 간결해집니다. 이러한 이유로, 앞으로 프로젝트의 리팩토링 과정에서 타입 추론을 더욱 적극적으로 활용할 계획입니다.

-추가적인 TypeScript 학습과 리팩토링: TypeScript에 대한 이해를 더욱 심화시키기 위해, 앞으로 더 많은 프로젝트를 진행하며 많은 경험을 쌓을 예정입니다. 이 과정에서 새롭게 알게 된 내용이나 더 나은 방법론을 발견한다면, 해당 방법을 이 프로젝트에도 적용하여 리팩토링을 진행할 계획입니다. 이를 통해 더욱 견고하고 효율적인 코드를 작성하며, TypeScript의 전반적인 이해도를 향상시키는 데 중점을 둘 것입니다.
