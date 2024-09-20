import { renderHook, waitFor } from "@testing-library/react";
import { useStudentContainer } from "./StudentListContainer.hook";
import { Student } from "@/lib/Student";

global.fetch = jest.fn(() =>
  Promise.resolve({
    ok: true,
    json: () =>
      Promise.resolve({
        schools: [
          {
            id: 1,
            name: "Escola Teste",
            classes: [
              {
                id: 1,
                name: "Turma 1A",
                students: [
                  { id: 1, name: "Aluno 1", registration: "2023001" },
                  { id: 2, name: "Aluno 2", registration: "2023002" },
                ],
              },
            ],
          },
        ],
      }),
  })
) as jest.Mock;

beforeEach(() => {
  jest.spyOn(console, "error").mockImplementation(() => {});
});

afterEach(() => {
  jest.restoreAllMocks();
});

describe("useStudentContainer hook", () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  it("deve carregar os alunos corretamente e criar instâncias de Student", async () => {
    const { result } = renderHook(() => useStudentContainer(1));

    expect(result.current.students).toEqual([]);
    expect(result.current.error).toBeNull();

    await waitFor(() => {
      expect(result.current.students).toHaveLength(2);
    });

    const student = result.current.students[0];
    expect(student).toBeInstanceOf(Student);
    expect(student.name).toBe("Aluno 1");
    expect(student.registration).toBe("2023001");
  });

  it("deve retornar erro ao carregar os alunos", async () => {
    global.fetch = jest.fn(() =>
      Promise.resolve({
        ok: false,
      })
    ) as jest.Mock;

    const { result } = renderHook(() => useStudentContainer(1));

    await waitFor(() => {
      expect(result.current.error).toBe("Erro ao carregar alunos");
      expect(result.current.students).toEqual([]);
    });
  });

  it("não deve carregar os alunos se classId for inválido", async () => {
    const { result } = renderHook(() => useStudentContainer(0));

    expect(result.current.students).toEqual([]);
    expect(result.current.error).toBeNull();

    await waitFor(() => {
      expect(result.current.students).toHaveLength(0);
    });
  });
});
