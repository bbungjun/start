/**
 * v0 by Vercel.
 * @see https://v0.dev/t/cB6Dq7Z7sn2
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { CardTitle, CardDescription, CardHeader, CardContent, CardFooter, Card } from "@/components/ui/card"
import { DialogTitle, DialogDescription, DialogHeader, DialogContent, DialogFooter, Dialog } from "@/components/ui/dialog"
import React from "react"

export default function Component() {
  return (
    <div className="flex flex-col min-h-[100dvh] dark:bg-gray-900 dark:text-white">
      <header className="bg-[#0072C6] text-white py-4 px-6 flex items-center justify-between">
        <Link className="flex items-center gap-2" href="#">
          <BookIcon className="h-6 w-6" />
          <span className="text-lg font-semibold">강원 대학교 컴퓨터 공학과</span>
        </Link>
        <nav className="hidden md:flex items-center gap-6">
          <Link className="hover:underline" href="#">
            홈
          </Link>
          <Link className="hover:underline" href="#">
            전공 강좌
          </Link>
          <Link className="hover:underline" href="#">
            교수진
          </Link>
          <Link className="hover:underline" href="#">
            연구 분야
          </Link>
          <Link className="hover:underline" href="#">
            연락처
          </Link>
        </nav>
        <Button className="md:hidden" size="icon" variant="outline">
          <MenuIcon className="h-6 w-6" />
          <span className="sr-only">탐색 메뉴 토글</span>
        </Button>
      </header>
      <main className="flex-1 py-12 px-4 md:px-8 lg:px-12">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-3xl font-bold mb-8">컴퓨터 공학과 전공 강좌</h1>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            <Card className="max-w-sm">
              <CardHeader>
                <CardTitle>컴퓨터 프로그래밍 I</CardTitle>
                <CardDescription>C 언어를 사용하여 기본적인 프로그래밍 개념과 기술을 학습합니다.</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  <div>
                    <span className="font-medium">학점:</span>
                    3{"\n                                "}
                  </div>
                  <div>
                    <span className="font-medium">선수 과목:</span>
                    없음{"\n                                "}
                  </div>
                </div>
              </CardContent>
              <CardFooter>
                <Button className="w-full" variant="outline">
                  자세히 보기
                </Button>
              </CardFooter>
            </Card>
            <Card className="max-w-sm">
              <CardHeader>
                <CardTitle>자료 구조</CardTitle>
                <CardDescription>배열, 연결 리스트, 스택, 큐 등 기본적인 자료 구조를 학습합니다.</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  <div>
                    <span className="font-medium">학점:</span>
                    3{"\n                                "}
                  </div>
                  <div>
                    <span className="font-medium">선수 과목:</span>
                    컴퓨터 프로그래밍 I{"\n                                "}
                  </div>
                </div>
              </CardContent>
              <CardFooter>
                <Button className="w-full" variant="outline">
                  자세히 보기
                </Button>
              </CardFooter>
            </Card>
            <Card className="max-w-sm">
              <CardHeader>
                <CardTitle>알고리즘 분석</CardTitle>
                <CardDescription>알고리즘의 시간 복잡도와 공간 복잡도를 분석하는 방법을 학습합니다.</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  <div>
                    <span className="font-medium">학점:</span>
                    3{"\n                                "}
                  </div>
                  <div>
                    <span className="font-medium">선수 과목:</span>
                    자료 구조{"\n                                "}
                  </div>
                </div>
              </CardContent>
              <CardFooter>
                <Button className="w-full" variant="outline">
                  자세히 보기
                </Button>
              </CardFooter>
            </Card>
            <Card className="max-w-sm">
              <CardHeader>
                <CardTitle>운영 체제</CardTitle>
                <CardDescription>
                  프로세스 관리, 메모리 관리, 파일 시스템 등 운영 체제의 핵심 개념을 학습합니다.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  <div>
                    <span className="font-medium">학점:</span>
                    3{"\n                                "}
                  </div>
                  <div>
                    <span className="font-medium">선수 과목:</span>
                    컴퓨터 구조{"\n                                "}
                  </div>
                </div>
              </CardContent>
              <CardFooter>
                <Button className="w-full" variant="outline">
                  자세히 보기
                </Button>
              </CardFooter>
            </Card>
            <Card className="max-w-sm">
              <CardHeader>
                <CardTitle>데이터베이스 시스템</CardTitle>
                <CardDescription>관계형 데이터베이스 모델, SQL, 트랜잭션 처리 등을 학습합니다.</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  <div>
                    <span className="font-medium">학점:</span>
                    3{"\n                                "}
                  </div>
                  <div>
                    <span className="font-medium">선수 과목:</span>
                    자료 구조{"\n                                "}
                  </div>
                </div>
              </CardContent>
              <CardFooter>
                <Button className="w-full" variant="outline">
                  자세히 보기
                </Button>
              </CardFooter>
            </Card>
            <Card className="max-w-sm">
              <CardHeader>
                <CardTitle>컴퓨터 구조</CardTitle>
                <CardDescription>
                  CPU, 메모리, 입출력 장치 등 컴퓨터 하드웨어의 구조와 동작 원리를 학습합니다.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  <div>
                    <span className="font-medium">학점:</span>
                    3{"\n                                "}
                  </div>
                  <div>
                    <span className="font-medium">선수 과목:</span>
                    디지털 논리 설계{"\n                                "}
                  </div>
                </div>
              </CardContent>
              <CardFooter>
                <Button className="w-full" variant="outline">
                  자세히 보기
                </Button>
              </CardFooter>
            </Card>
            <Card className="max-w-sm">
              <CardHeader>
                <CardTitle>인공 지능 개론</CardTitle>
                <CardDescription>인공 지능의 기본 개념과 다양한 기술을 학습합니다.</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  <div>
                    <span className="font-medium">학점:</span>
                    3{"\n                                "}
                  </div>
                  <div>
                    <span className="font-medium">선수 과목:</span>
                    자료 구조{"\n                                "}
                  </div>
                </div>
              </CardContent>
              <CardFooter>
                <Button className="w-full" variant="outline">
                  자세히 보기
                </Button>
              </CardFooter>
            </Card>
            <Card className="max-w-sm">
              <CardHeader>
                <CardTitle>컴퓨터 네트워크</CardTitle>
                <CardDescription>네트워크 프로토콜, 네트워크 장비, 네트워크 보안 등을 학습합니다.</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  <div>
                    <span className="font-medium">학점:</span>
                    3{"\n                                "}
                  </div>
                  <div>
                    <span className="font-medium">선수 과목:</span>
                    운영 체제{"\n                                "}
                  </div>
                </div>
              </CardContent>
              <CardFooter>
                <Button className="w-full" variant="outline">
                  자세히 보기
                </Button>
              </CardFooter>
            </Card>
            <Card className="max-w-sm">
              <CardHeader>
                <CardTitle>소프트웨어 공학</CardTitle>
                <CardDescription>소프트웨어 개발 프로세스, 설계, 테스팅 등을 학습합니다.</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  <div>
                    <span className="font-medium">학점:</span>
                    3{"\n                                "}
                  </div>
                  <div>
                    <span className="font-medium">선수 과목:</span>
                    자료 구조, 알고리즘 분석{"\n                                "}
                  </div>
                </div>
              </CardContent>
              <CardFooter>
                <Button className="w-full" variant="outline">
                  자세히 보기
                </Button>
              </CardFooter>
            </Card>
          </div>
        </div>
      </main>
      <footer className="bg-[#0072C6] text-white py-6 px-4 md:px-8 lg:px-12">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between">
          <div className="flex items-center gap-2 mb-4 md:mb-0">
            <BookIcon className="h-6 w-6" />
            <span className="text-lg font-semibold">강원 대학교 컴퓨터 공학과</span>
          </div>
          <div className="text-sm">© 2024 강원 대학교 컴퓨터 공학과. 모든 권리 보유.</div>
          <div className="text-sm">
            <Link className="hover:underline" href="#">
              문의하기
            </Link>
          </div>
        </div>
      </footer>
      <Dialog>
        <DialogContent className="p-6 bg-white rounded-lg shadow-lg dark:bg-gray-900 dark:text-white max-w-2xl w-full">
          <React.Fragment key=".0">
            <DialogHeader>
              <DialogTitle>컴퓨터 프로그래밍 I</DialogTitle>
              <DialogDescription>C 언어를 사용하여 기본적인 프로그래밍 개념과 기술을 학습합니다.</DialogDescription>
            </DialogHeader>
            <DialogContent>
              <div className="space-y-2">
                <div>
                  <span className="font-medium">학점:</span>
                  3{"\n                              "}
                </div>
                <div>
                  <span className="font-medium">선수 과목:</span>
                  없음{"\n                              "}
                </div>
                <div>
                  <span className="font-medium">강의 내용:</span>
                  <ul className="list-disc pl-4">
                    <li>C 언어 기본 문법 및 문법 구조 이해</li>
                    <li>변수, 데이터 타입, 연산자 등 기본 개념 학습</li>
                    <li>조건문, 반복문, 함수 등 프로그래밍 기본 구조 학습</li>
                    <li>배열, 포인터, 구조체 등 고급 개념 학습</li>
                    <li>다양한 실습 과제를 통한 프로그래밍 능력 향상</li>
                  </ul>
                </div>
              </div>
            </DialogContent>
            <DialogFooter>
              <div>
                <Button variant="outline">닫기</Button>
              </div>
            </DialogFooter>
          </React.Fragment>
          <React.Fragment key=".1">
            <DialogHeader>
              <DialogTitle>자료 구조</DialogTitle>
              <DialogDescription>배열, 연결 리스트, 스택, 큐 등 기본적인 자료 구조를 학습합니다.</DialogDescription>
            </DialogHeader>
            <DialogContent>
              <div className="space-y-2">
                <div>
                  <span className="font-medium">학점:</span>
                  3{"\n                              "}
                </div>
                <div>
                  <span className="font-medium">선수 과목:</span>
                  컴퓨터 프로그래밍 I{"\n                              "}
                </div>
                <div>
                  <span className="font-medium">강의 내용:</span>
                  <ul className="list-disc pl-4">
                    <li>배열, 연결 리스트, 스택, 큐 등 기본 자료 구조 학습</li>
                    <li>자료 구조의 특성, 장단점, 구현 방법 이해</li>
                    <li>트리, 그래프, 해시 테이블 등 고급 자료 구조 학습</li>
                    <li>자료 구조 선택 및 활용 방법 학습</li>
                    <li>다양한 알고리즘 문제 해결을 통한 실습</li>
                  </ul>
                </div>
              </div>
            </DialogContent>
            <DialogFooter>
              <div>
                <Button variant="outline" />
              </div>
            </DialogFooter>
          </React.Fragment>
        </DialogContent>
      </Dialog>
    </div>
  )
}

function BookIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1 0-5H20" />
    </svg>
  )
}


function MenuIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <line x1="4" x2="20" y1="12" y2="12" />
      <line x1="4" x2="20" y1="6" y2="6" />
      <line x1="4" x2="20" y1="18" y2="18" />
    </svg>
  )
}