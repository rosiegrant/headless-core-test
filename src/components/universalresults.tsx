import React from 'react';

/**
 * Universal Results Component
 */


export default class UniversalResults extends React.Component {
    props: any;
    
    constructor(props: {} | Readonly<{}>) {
        super(props);
    }

    render() {

       if (this.props.results.length === 0) {
            return (
                <div>
                    no search results
                </div>
            )
        } 
        return (
            
            <div className="flex">
                <div className="overflow-x-auto m-auto">
                    <div className="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
                    <div className="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
                        <table className="min-w-full divide-y divide-gray-200">
                        <tbody className="bg-white divide-y divide-gray-200">
                        {this.props.results.map((result: { rawData: { name: {} | null | undefined; description: boolean | React.ReactChild | React.ReactFragment | React.ReactPortal | null | undefined; }; }) => 
                            <tr >
                            <td className="px-6 py-4">
                                <div className="flex items-center text-left">
                                <div className="ml-4">
                                    <div className="text-sm font-medium text-gray-900">
                                    {result.rawData.name}
                                    </div>
                                    <div className="text-sm text-gray-500">
                                    {result.rawData.description}
                                    </div>
                                </div>
                                </div>
                            </td>
                            </tr>
                        )}
                        </tbody>
                        </table>
                    </div>
                        
                    </div>
                </div>
            </div>

        )
    }
}