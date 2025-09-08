# 🚀 Next.js App Router 페이지 이동 가이드

Next.js의 **App Router**를 사용하면, 폴더 구조만으로 페이지를 만들고 주소(URL)를 관리할 수 있습니다.  
파일이나 폴더 이름에 따라 자동으로 라우팅이 설정되며, 별도의 라우터 설정이 필요하지 않습니다.

---

## 📂 기본 폴더 구조와 URL 매핑

- `app` 폴더: Next.js 13부터는 **App Router** 방식으로 페이지를 구성합니다.
- 폴더 구조가 그대로 URL로 매핑됩니다.
- 파일 이름이 `page.tsx`라면, 해당 폴더의 경로에 접근할 수 있습니다.

**예시:**
```

app/page.tsx          -> /
app/**about**/page.tsx    -> /about
app/**blog**/page.tsx     -> /blog

```

---

## 📑 다중 페이지 구현

각 페이지는 새로운 폴더로 만들어 경로에 매핑할 수 있습니다.

**예시:**
```

/app
  /about
    page.tsx   -> /about
  /contact
    page.tsx   -> /contact

````

---

## 🔗 페이지 이동 (Link 컴포넌트)

Next.js에서 제공하는 `<Link>` 컴포넌트를 사용하면 **클라이언트 사이드 라우팅**을 지원하여 빠른 페이지 전환이 가능합니다.

```tsx
import Link from 'next/link';

export default function HomePage() {
  return (
    <div>
      <h1>Home Page</h1>
      <Link href="/about">About Us</Link>
    </div>
  );
}
````

---

## 💥 동적 라우팅

동적인 경로는 **폴더 이름을 대괄호(`[]`)로 감싸서** 표현합니다.
이를 통해 URL 파라미터를 받을 수 있습니다.

**예시:**

```
app/blog/[id]/page.tsx  -> /blog/123
```

위 예시에서 `[id]`는 동적 파라미터이며, `/blog/123`과 같이 요청 시 `id` 값(`123`)을 받을 수 있습니다.

---

## ✅ 정리

* App Router는 **폴더 구조 기반 자동 라우팅**을 제공한다.
* 각 폴더 안에 `page.tsx`를 만들면 해당 경로가 곧 URL이 된다.
* `<Link>` 컴포넌트로 페이지 간 이동을 최적화할 수 있다.
* 동적 라우팅은 `[param]` 형태의 폴더명을 활용한다.

```
