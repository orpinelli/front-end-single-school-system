import { renderHook, act, waitFor } from "@testing-library/react";
import { useClassContainer } from "./ClassContainer.hook";
import { Class } from "@/lib/Class";
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
                series: "1º Ano",
                students: [
                  { id: 1, name: "Aluno 1", registration: "123456" },
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

describe("useClassContainer hook", () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  it("deve carregar as turmas corretamente e criar instâncias de Class", async () => {
    const { result } = renderHook(() => useClassContainer(1));

    expect(result.current.classes).toEqual([]);
    expect(result.current.error).toBeNull();

    await waitFor(() => {
      expect(result.current.classes).toHaveLength(1);
    });

    const classItem = result.current.classes[0];
    expect(classItem).toBeInstanceOf(Class);
    expect(classItem.getName()).toBe("Turma 1A"); 
    expect(classItem.getSeries()).toBe("1º Ano"); 
    expect(classItem.getStudents()).toHaveLength(1);

    const student = classItem.getStudents()[0];
    expect(student).toBeInstanceOf(Student);
    expect(student.getName()).toBe("Aluno 1");
    expect(student.registration).toBe("123456");
  });

  it("deve adicionar uma nova turma corretamente", async () => {
    const { result } = renderHook(() => useClassContainer(1));

    await waitFor(() => {
      expect(result.current.classes).toHaveLength(1);
    });

    act(() => {
      result.current.addClass({
        name: "Turma 2A",
        series: "2º Ano",
      });
    });

    await waitFor(() => {
      expect(result.current.classes).toHaveLength(2);
    });

    const newClass = result.current.classes[1];
    expect(newClass).toBeInstanceOf(Class);
    expect(newClass.getName()).toBe("Turma 2A"); 
    expect(newClass.getSeries()).toBe("2º Ano"); 
    expect(newClass.getStudents()).toEqual([]);
  });

  it("deve retornar erro ao carregar turmas", async () => {
    global.fetch = jest.fn(() =>
      Promise.resolve({
        ok: false,
      })
    ) as jest.Mock;

    const { result } = renderHook(() => useClassContainer(1));

    await waitFor(() => {
      expect(result.current.error).toBe("Erro ao carregar turmas");
      expect(result.current.classes).toEqual([]);
    });
  });
});
