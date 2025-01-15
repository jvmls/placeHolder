"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

type Possession = {
  possessionName: string;
  possessionType: string;
  description: string;
  isEditing?: boolean;
};

type Asset = {
  assetName: string;
  assetDescription: string;
  isEditing?: boolean;
};

export default function Possessions() {
  const [Possessions, setPossessions] = useState<Possession[]>([]);
  const [Assets, setAssets] = useState<Asset[]>([]);

  const handleAddAsset = () => {
    setAssets((prevAssets) => [
      ...prevAssets,
      {
        assetName: "",
        assetDescription: "",
        isEditing: true,
      },
    ]);
  };

  const handleSaveAsset = (index: number) => {
    setAssets((prevAssets) =>
      prevAssets.map((asset, i) =>
        i === index ? { ...asset, isEditing: false } : asset
      )
    );
  };

  const handleEditAsset = (index: number) => {
    setAssets((prevAssets) =>
      prevAssets.map((asset, i) =>
        i === index ? { ...asset, isEditing: true } : asset
      )
    );
  };

  const handleChange2 = (
    index: number,
    field: keyof Asset,
    value: string | null
  ) => {
    setAssets((prevAssets) =>
      prevAssets.map((asset, i) =>
        i === index ? { ...asset, [field]: value } : asset
      )
    );
  };

  const handleAddPossession = () => {
    setPossessions((prevPossessions) => [
      ...prevPossessions,
      {
        possessionName: "",
        possessionType: "",
        description: "",
        isEditing: true,
      },
    ]);
  };

  const handleSavePossession = (index: number) => {
    setPossessions((prevPossessions) =>
      prevPossessions.map((possession, i) =>
        i === index ? { ...possession, isEditing: false } : possession
      )
    );
  };

  const handleEditPossession = (index: number) => {
    setPossessions((prevPossessions) =>
      prevPossessions.map((possession, i) =>
        i === index ? { ...possession, isEditing: true } : possession
      )
    );
  };

  const handleChange = (
    index: number,
    field: keyof Possession,
    value: string | null
  ) => {
    setPossessions((prevPossessions) =>
      prevPossessions.map((possession, i) =>
        i === index ? { ...possession, [field]: value } : possession
      )
    );
  };

  return (
    <>
      <div className="grid grid-cols-7 gap-4 grid-rows-1 ">
        <h2 className="grid grid-cols-4  gap-4">Possessions</h2>
        <Button
          onClick={handleAddPossession}
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
        >
          + Add Possession
        </Button>
      </div>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Possession Name</TableHead>
            <TableHead>Possession Type</TableHead>
            <TableHead>Description</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody className="bg-slate-800 rounded">
          {Possessions.length === 0 ? (
            <TableRow>
              <TableCell colSpan={8} className="text-center">
                No possessions added yet. Click "+" to add a possession.
              </TableCell>
            </TableRow>
          ) : (
            Possessions.map((possession, index) => (
              <TableRow key={index}>
                {possession.isEditing ? (
                  <>
                    <TableCell>
                      <Input
                        placeholder="Possession Name"
                        value={possession.possessionName}
                        onChange={(e) =>
                          handleChange(index, "possessionName", e.target.value)
                        }
                      />
                    </TableCell>
                    <TableCell>
                      <Input
                        placeholder="Possession Type"
                        value={possession.possessionType ?? ""}
                        onChange={(e) =>
                          handleChange(index, "possessionType", e.target.value)
                        }
                      />
                    </TableCell>
                    <TableCell>
                      <Input
                        placeholder="Description"
                        value={possession.description ?? ""}
                        onChange={(e) =>
                          handleChange(index, "description", e.target.value)
                        }
                      />
                    </TableCell>
                    <TableCell>
                      <Button
                        onClick={() => handleSavePossession(index)}
                        className="bg-green-500 text-white px-2 py-1 rounded hover:bg-green-600"
                      >
                        Save
                      </Button>
                    </TableCell>
                  </>
                ) : (
                  <>
                    <TableCell>{possession.possessionName}</TableCell>
                    <TableCell>{possession.possessionType}</TableCell>
                    <TableCell>{possession.description}</TableCell>
                    <TableCell>
                      <Button
                        onClick={() => handleEditPossession(index)}
                        className="bg-yellow-500 text-white px-2 py-1 rounded hover:bg-yellow-600"
                      >
                        Edit
                      </Button>
                    </TableCell>
                  </>
                )}
              </TableRow>
            ))
          )}
        </TableBody>
      </Table>
      <Separator className="my-4 h-1 bg-slate-950" />
      <div className="flex flex-row w-1/2  gap-4 grid-rows-1 ">
        <h2 className="grid grid-cols-4  gap-4">Wealth</h2>
        <Input
          className="bg-slate-800 text-slate-500 border border-white"
          placeholder="Spending Level"
        />
        <Input
          className="bg-slate-800 text-slate-500 border border-white"
          placeholder="Cash"
        />
      </div>
      <Separator className="my-4 h-1 bg-slate-950" />
      <div className="grid grid-cols-7  gap-4 grid-rows-1 ">
        <h2 className="grid grid-cols-4  gap-4">Assets</h2>
        <Button
          onClick={handleAddAsset}
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
        >
          + Add Asset
        </Button>
      </div>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Asset Name</TableHead>
            <TableHead>Description</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody className="bg-slate-800 rounded">
          {Assets.length === 0 ? (
            <TableRow>
              <TableCell colSpan={8} className="text-center">
                No assets added yet. Click "+" to add an asset.
              </TableCell>
            </TableRow>
          ) : (
            Assets.map((asset, index) => (
              <TableRow key={index}>
                {asset.isEditing ? (
                  <>
                    <TableCell>
                      <Input
                        placeholder="Asset Name"
                        value={asset.assetName}
                        onChange={(e) =>
                          handleChange2(index, "assetName", e.target.value)
                        }
                      />
                    </TableCell>
                    <TableCell>
                      <Input
                        placeholder="Description"
                        value={asset.assetDescription ?? ""}
                        onChange={(e) =>
                          handleChange2(
                            index,
                            "assetDescription",
                            e.target.value
                          )
                        }
                      />
                    </TableCell>
                    <TableCell>
                      <Button
                        onClick={() => handleSaveAsset(index)}
                        className="bg-green-500 text-white px-2 py-1 rounded hover:bg-green-600"
                      >
                        Save
                      </Button>
                    </TableCell>
                  </>
                ) : (
                  <>
                    <TableCell>{asset.assetName}</TableCell>
                    <TableCell>{asset.assetDescription}</TableCell>
                    <TableCell>
                      <Button
                        onClick={() => handleEditAsset(index)}
                        className="bg-yellow-500 text-white px-2 py-1 rounded hover:bg-yellow-600"
                      >
                        Edit
                      </Button>
                    </TableCell>
                  </>
                )}
              </TableRow>
            ))
          )}
        </TableBody>
      </Table>
    </>
  );
}
