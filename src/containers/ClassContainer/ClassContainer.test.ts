import { renderHook, act, waitFor } from "@testing-library/react";
import { useClassContainer } from "./ClassContainer.hook";
import { Class } from "@/lib/Class";

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
                students: [],
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
    expect(classItem.name).toBe("Turma 1A");
    expect(classItem.series).toBe("1º Ano");
    expect(classItem.students).toEqual([]);
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
    expect(newClass.name).toBe("Turma 2A");
    expect(newClass.series).toBe("2º Ano");
    expect(newClass.students).toEqual([]);
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
