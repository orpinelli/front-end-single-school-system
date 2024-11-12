import { renderHook, act, waitFor } from "@testing-library/react";
import { useSchoolContainer } from "./SchoolListContainer.hook";
import { School } from "@/lib/School";
import { Class } from "@/lib/Class";

global.fetch = jest.fn(() =>
  Promise.resolve({
    ok: true,
    json: () =>
      Promise.resolve({
        schools: [
          {
            id: 1,
            name: "Escola Municipal José de Anchieta",
            address: "Rua das Flores, 123, Centro",
            classes: [
              {
                id: 1,
                name: "Turma 1A",
                series: "1º Ano",
                students: [
                  { id: 1, name: "Ana Silva", registration: "2023001" },
                  { id: 2, name: "Carlos Pereira", registration: "2023002" },
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

describe("useSchoolContainer hook", () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  it("deve carregar as escolas corretamente e criar instâncias de School e Class", async () => {
    const { result } = renderHook(() => useSchoolContainer());
    expect(result.current.schools).toEqual([]);
    expect(result.current.error).toBeNull();

    await waitFor(() => {
      expect(result.current.schools).toHaveLength(1);
    });

    const school = result.current.schools[0];
    expect(school).toBeInstanceOf(School);
    expect(school.getName()).toBe("Escola Municipal José de Anchieta");
    expect(school.getNumberOfClasses()).toBe(1);
    expect(school.getNumberOfStudents()).toBe(2);

    const schoolClass = school.getClasses()[0];
    expect(schoolClass).toBeInstanceOf(Class);
    expect(schoolClass.getName()).toBe("Turma 1A");
    expect(schoolClass.getStudents()).toHaveLength(2);
  });

  it("deve adicionar uma nova escola e manter a lógica de orientação a objetos", async () => {
    const { result } = renderHook(() => useSchoolContainer());
    await waitFor(() => {
      expect(result.current.schools).toHaveLength(1);
    });

    act(() => {
      result.current.addSchool({
        name: "Nova Escola",
        address: "Endereço Nova",
      });
    });

    await waitFor(() => {
      expect(result.current.schools).toHaveLength(2);
    });

    const newSchool = result.current.schools[1];
    expect(newSchool).toBeInstanceOf(School);
    expect(newSchool.getName()).toBe("Nova Escola");
    expect(newSchool.getNumberOfClasses()).toBe(0);
    expect(newSchool.getNumberOfStudents()).toBe(0);
  });

  it("deve editar uma escola existente corretamente", async () => {
    const { result } = renderHook(() => useSchoolContainer());

    await waitFor(() => {
      expect(result.current.schools).toHaveLength(1);
    });

    act(() => {
      result.current.editSchool({
        id: 1,
        name: "Escola Editada",
        address: "Novo Endereço",
      });
    });

    await waitFor(() => {
      const updatedSchool = result.current.schools[0];
      expect(updatedSchool.getName()).toBe("Escola Editada");
      expect(updatedSchool.getAddress()).toBe("Novo Endereço"); 
    });
  });

  it("deve retornar erro ao carregar as escolas", async () => {
    global.fetch = jest.fn(() =>
      Promise.resolve({
        ok: false,
      })
    ) as jest.Mock;

    const { result } = renderHook(() => useSchoolContainer());

    await waitFor(() => {
      expect(result.current.error).toBe("Erro ao carregar escolas");
      expect(result.current.schools).toEqual([]);
    });
  });
});
